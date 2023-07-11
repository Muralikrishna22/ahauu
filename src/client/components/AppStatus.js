import React, { useEffect, useState } from 'react';
import { RiCheckLine, RiErrorWarningFill } from 'react-icons/ri';
import '../assets/css/AppStatus.css';

const AppStatus = () => {
    const [isServerRendered, setIsServerRendered] = useState(true);
    const [isClientHydrated, setIsClientHydrated] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                setIsClientHydrated(true);
            }, 1000);
        }
    }, []);

    useEffect(() => {
        if (isClientHydrated) {
            setTimeout(() => {
                setIsClientHydrated(false);
            }, 5000);
        }
    }, [isClientHydrated]);

    return (
        <div className="app-status">
            <>
                {/* {isServerRendered && (
                    <div className="toast">
                        <RiErrorWarningFill className="toast-error-icon" />
                        <p>Failed to hydrate  </p>
                    </div>
                )} */}
                {isClientHydrated && (
                    <div className="toast">
                        <RiCheckLine className="toast-icon" />
                        <p>Hydration complete</p>
                    </div>
                )}
            </>
        </div>
    );
};

export default AppStatus;
