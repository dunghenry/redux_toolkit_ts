import React from 'react';
import { useAppDispatch } from 'store/hooks';
import { getUsers } from 'store/slices/userSlice';
const App = () => {
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        dispatch(getUsers());
    }, []);
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
    );
};

export default App;
