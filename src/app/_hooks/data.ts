import useSWR from "swr";

type Contact = {
  hash: string;
  name: string;
  mobile_no: number;
  submitted: boolean;
}

// read from os env
const mode = process.env.NODE_ENV;
const sample_contact_list: Contact[] = [{"hash":"test", "name": "Hon Hao Chen", "mobile_no":6588870380, "submitted":false}]

const CONTACT_LIST_API = `https://script.google.com/macros/s/AKfycbxu2Wrlevbf4-hz5gJEuCqmf9qU2rtVCHAL68bMgqHnLI0vm7xbFLufHShCdjzyImkO8g/exec`;

const useContactList = () => {
  const { data, error, isLoading, isValidating } = useSWR(
    CONTACT_LIST_API,
    (url) => {
      if (mode === "development") {
        return sample_contact_list;
      }
      return fetch(url).then((r) => r.json())
    },
    {
      refreshInterval: 10000,
    }
  );

  return { data, error, isLoading, isValidating };
};

type FormData = {
  name: string;
  numPax: number;
  dietaryOption: string;
};

const postContactForm = async (data: FormData) => {
  const response = await fetch(CONTACT_LIST_API, {
    redirect: "follow",
    method: "POST",
    body: JSON.stringify({
      name: data.name,
      num_pax: data.numPax,
      dietary_option: data.dietaryOption,
    }),
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
  });

  if (response.status !== 200) {
    return { error: "Failed to submit form" };
  }

  return response.json();
};

export { useContactList, postContactForm };
