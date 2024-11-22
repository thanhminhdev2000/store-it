import { Button } from "@/components/ui/button";
import { signOutUser } from "@/lib/actions/user.actions";
import Image from "next/image";

const Header = ({
  userId,
  accountId,
}: {
  userId?: string;
  accountId?: string;
}) => {
  return (
    <header className="header">
      {/* <Search /> */}
      Search
      <div className="header-wrapper">
        {/* <FileUploader ownerId={userId} accountId={accountId} /> */}
        FileUploader
        <form
          action={async () => {
            "use server";

            await signOutUser();
          }}
        >
          <Button type="submit" className="sign-out-button">
            <Image
              src="/assets/icons/logout.svg"
              alt="logo"
              width={24}
              height={24}
              className="w-6"
            />
          </Button>
        </form>
      </div>
    </header>
  );
};
export default Header;
