import React, { ComponentProps } from "react";

export const Download = ({
  size,
  fill = "currentColor",
  ...rest
}: ComponentProps<"svg"> & { size: string | number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    {...rest}
  >
    <path
      d="M10.0002 12.9788C9.88905 12.9788 9.78488 12.9615 9.68766 12.9268C9.59044 12.892 9.50016 12.833 9.41683 12.7497L6.41683 9.74967C6.25016 9.58301 6.1703 9.38856 6.17725 9.16634C6.18419 8.94412 6.26405 8.74967 6.41683 8.58301C6.5835 8.41634 6.78141 8.32954 7.01058 8.32259C7.23975 8.31565 7.43766 8.39551 7.60433 8.56217L9.16683 10.1247V4.16634C9.16683 3.93023 9.24669 3.73231 9.40641 3.57259C9.56613 3.41287 9.76405 3.33301 10.0002 3.33301C10.2363 3.33301 10.4342 3.41287 10.5939 3.57259C10.7536 3.73231 10.8335 3.93023 10.8335 4.16634V10.1247L12.396 8.56217C12.5627 8.39551 12.7606 8.31565 12.9897 8.32259C13.2189 8.32954 13.4168 8.41634 13.5835 8.58301C13.7363 8.74967 13.8161 8.94412 13.8231 9.16634C13.83 9.38856 13.7502 9.58301 13.5835 9.74967L10.5835 12.7497C10.5002 12.833 10.4099 12.892 10.3127 12.9268C10.2154 12.9615 10.1113 12.9788 10.0002 12.9788ZM5.00016 16.6663C4.54183 16.6663 4.14947 16.5031 3.82308 16.1768C3.49669 15.8504 3.3335 15.458 3.3335 14.9997V13.333C3.3335 13.0969 3.41336 12.899 3.57308 12.7393C3.7328 12.5795 3.93072 12.4997 4.16683 12.4997C4.40294 12.4997 4.60086 12.5795 4.76058 12.7393C4.9203 12.899 5.00016 13.0969 5.00016 13.333V14.9997H15.0002V13.333C15.0002 13.0969 15.08 12.899 15.2397 12.7393C15.3995 12.5795 15.5974 12.4997 15.8335 12.4997C16.0696 12.4997 16.2675 12.5795 16.4272 12.7393C16.587 12.899 16.6668 13.0969 16.6668 13.333V14.9997C16.6668 15.458 16.5036 15.8504 16.1772 16.1768C15.8509 16.5031 15.4585 16.6663 15.0002 16.6663H5.00016Z"
      fill={fill}
    />
  </svg>
);