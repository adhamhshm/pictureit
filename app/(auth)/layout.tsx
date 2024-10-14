import React from "react";

// Layout is a constant assigned to a function that takes a single prop: children.
// The children prop is typed using TypeScript to indicate it can be any valid React node (like elements, strings, numbers, etc.).
// The component returns a <main> HTML element with a class name of "auth".
// Inside the <main> tag, it renders the children prop, which allows for any nested content passed to the Layout component when it is used.

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="auth">
            {children}
        </main>
    )
}

export default Layout;