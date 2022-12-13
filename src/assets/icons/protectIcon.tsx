import React from "react";

type Props = {
  color: string;
};

function Icon(props: Props) {
  return (
    <svg
      width="15"
      height="17"
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9838 3.39242C12.5399 3.39242 9.28604 2.73571 7.50001 0C5.71418 2.73571 2.46017 3.39242 0.0161777 3.39242C0.0161777 3.39242 -0.706008 14.3736 7.50001 17C15.7058 14.3737 14.9838 3.39242 14.9838 3.39242ZM12.3879 6.35887L7.12616 11.1933C7.05245 11.261 6.95851 11.2949 6.86456 11.2949C6.77266 11.2949 6.68092 11.2627 6.60801 11.1979L3.5529 8.48803C3.39552 8.34843 3.38287 8.10943 3.52458 7.95441C3.6663 7.79938 3.90893 7.78692 4.0663 7.92652L6.86014 10.4045L11.8643 5.80619C12.019 5.66379 12.2618 5.67204 12.4064 5.82473C12.5508 5.97726 12.5424 6.21626 12.3877 6.35867L12.3879 6.35887Z"
        fill={props.color}
      />
    </svg>
  );
}

export default Icon;