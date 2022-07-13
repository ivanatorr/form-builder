import React from "react";
import "../App.css";

export const TableRow = React.forwardRef(({
    ...props
}, ref) => {
    return <tr 
        {...props}
        ref = {ref}
    />
});
