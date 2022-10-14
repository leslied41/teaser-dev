import { useRouter } from "next/router";
export const useLocale = () => {
  const router = useRouter();
  const isEn = router.locale === "en";
  return isEn;
};
