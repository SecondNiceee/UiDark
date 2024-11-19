import AppRouter from "./AppRouter";
import BaseProvider from "./providers/BaseProvider";
import "./styles/_index.scss"

const AppEntry = () => {
    return (
        <BaseProvider>
            <AppRouter/>
        </BaseProvider>
    );
};

export default AppEntry;