import useSWR from "swr";

const CONTACT_LIST_API = `https://script.google.com/macros/s/AKfycbyl7R1ylzE6X1iGvlrl35082IgapjC5sU7-I7WPOtY3IB_gjcXxknEK4qCe6xsaEBy6zA/exec`;

const useContactList = () => {
  const { data, error, isLoading, isValidating } = useSWR(
    CONTACT_LIST_API,
    (url) => fetch(url).then((r) => r.json()),
    {
      refreshInterval: 10000,
    }
  );

  return { data, error, isLoading, isValidating };
};

export default useContactList;
