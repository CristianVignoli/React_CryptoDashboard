import Dashboard from "../components/dashboard/Dashboard";
import Alerts from "../components/alerts/Alerts";
import SideBar from "../components/sidebar/Sidebar";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Defend from "../components/defend/Defend";
import Protect from "../components/protect/Protect";
import BlurScreen from "../components/common/BlurScreen";
import StatusModal from "../components/modals/StatusModal";
import Loader from "../components/common/Loader";

const HomePage = () => {
  const currentView = useSelector(
    (state: RootState) => state.mixed.currentView
  );
  const isStatusModalVisible = useSelector(
    (state: RootState) => state.mixed.isStatusModalVisible
  );
  const isLoaderVisible = useSelector(
    (state: RootState) => state.balance.balance.status === "loading"
  )

  function renderView(view: string) {
    switch (view) {
      case "dashboard":
        return <Dashboard />;
      case "alerts":
        return <Alerts />;
      case "defend":
        return <Defend />;
      case "protect":
        return <Protect />;
      default:
        return <Dashboard />;
    }
  }

  return (
    <>
      <SideBar />
      {renderView(currentView)}
      {isStatusModalVisible || isLoaderVisible ? <BlurScreen /> : null}
      {isStatusModalVisible ? <StatusModal /> : null}
      {isLoaderVisible ? <Loader /> : null}
    </>
  );
};

export default HomePage;
