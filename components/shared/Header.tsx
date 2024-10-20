import React from "react";
 
type HeaderProps = {
    title: string;
    subtitle?: string;
};

const Header = ({ title, subtitle }: HeaderProps) => {
    return (
        <>
            <h2 className="h2-bold text-dark-600">{title}</h2>
            {subtitle && <p className="p-16-regular mt-4">{subtitle}</p>}
        </>
    )
}

export default Header;

// Example other ways
// const Header = ({ title, subtitle }: { title: string, subtitle?: string }) => {
//   return (
//     <>
//       <h2 className="h2-bold text-dark-600">{title}</h2>
//       {subtitle && <p className="p-16-regular mt-4">{subtitle}</p>}
//     </>
//   )
// }

// export default Header