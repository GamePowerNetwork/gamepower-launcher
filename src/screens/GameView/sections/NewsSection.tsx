import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

const api: any = (window as any).api;

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function NewsSection() {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  return <div className="flex flex-col justify-end"></div>;
}

export default NewsSection;
