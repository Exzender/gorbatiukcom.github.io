import React, { ComponentProps } from "react";

export const Report = ({
  size,
  fill = "#FF6060",
  ...rest
}: ComponentProps<"svg"> & { size: string | number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    {...rest}
  >
    <circle cx="60.5" cy="60.5" r="31.5" fill="white" />
    <path
      d="M60 85C61.4167 85 62.6042 84.5208 63.5625 83.5625C64.5208 82.6042 65 81.4167 65 80C65 78.5833 64.5208 77.3958 63.5625 76.4375C62.6042 75.4792 61.4167 75 60 75C58.5833 75 57.3958 75.4792 56.4375 76.4375C55.4792 77.3958 55 78.5833 55 80C55 81.4167 55.4792 82.6042 56.4375 83.5625C57.3958 84.5208 58.5833 85 60 85ZM60 65C61.4167 65 62.6042 64.5208 63.5625 63.5625C64.5208 62.6042 65 61.4167 65 60V40C65 38.5833 64.5208 37.3958 63.5625 36.4375C62.6042 35.4792 61.4167 35 60 35C58.5833 35 57.3958 35.4792 56.4375 36.4375C55.4792 37.3958 55 38.5833 55 40V60C55 61.4167 55.4792 62.6042 56.4375 63.5625C57.3958 64.5208 58.5833 65 60 65ZM45.375 105C44.0417 105 42.7708 104.75 41.5625 104.25C40.3542 103.75 39.2917 103.042 38.375 102.125L17.875 81.625C16.9583 80.7083 16.25 79.6458 15.75 78.4375C15.25 77.2292 15 75.9583 15 74.625V45.375C15 44.0417 15.25 42.7708 15.75 41.5625C16.25 40.3542 16.9583 39.2917 17.875 38.375L38.375 17.875C39.2917 16.9583 40.3542 16.25 41.5625 15.75C42.7708 15.25 44.0417 15 45.375 15H74.625C75.9583 15 77.2292 15.25 78.4375 15.75C79.6458 16.25 80.7083 16.9583 81.625 17.875L102.125 38.375C103.042 39.2917 103.75 40.3542 104.25 41.5625C104.75 42.7708 105 44.0417 105 45.375V74.625C105 75.9583 104.75 77.2292 104.25 78.4375C103.75 79.6458 103.042 80.7083 102.125 81.625L81.625 102.125C80.7083 103.042 79.6458 103.75 78.4375 104.25C77.2292 104.75 75.9583 105 74.625 105H45.375Z"
      fill={fill}
    />
  </svg>
);