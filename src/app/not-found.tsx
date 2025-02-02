import Link from "next/link";
import { Result } from "antd";

export default function NotFound() {
  return (
    <div className="w-full">

      <div className=" flex flex-col items-center justify-center text-center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Link href="/">
            <div className="px-4 py-2 bg-colorBG2 text-colorF2 text-xl font-semibold rounded-lg hover:bg-colorBG hover:text-colorF cursor-pointer">
              Go back home
            </div>
          </Link>
        }
      />
    </div>
    </div>

    
  );
}
