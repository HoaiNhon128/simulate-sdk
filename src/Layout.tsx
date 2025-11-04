import { Avatar, Dropdown, TopNavigationBar } from "mcr-design-systems";
import { useState } from "react";
import { Outlet } from "react-router";

const Layout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <TopNavigationBar
        actionsSection={
          <div className="flex items-center gap-sm">
            <Dropdown
              align="end"
              selected
              open={open}
              // items={groupsItems}
              items={[
                {
                  label: "Morecasback Reward",
                  value: "mcr",
                },
              ]}
              onOpenChange={(open: boolean) => setOpen(open)}
              // onValueChange={handleItemClick}
            >
              <Avatar
                // src={user?.avatar}
                disableCache
                alt="User Avatar"
                // lastName={user?.lastName}
                // firstName={user?.firstName}
                className="cursor-pointer"
                size={40}
                containerClassName="flex"
                innerClass="h-full w-full"
                bordered
                onClick={() => {
                  setOpen(true);
                }}
              />
            </Dropdown>
          </div>
        }
      />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
