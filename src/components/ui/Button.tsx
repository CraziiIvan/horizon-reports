type TButtonProps = {
    children: string;
  };
  
  function Button({ children }: TButtonProps) {
    return (
      <button className="py-1.5 px-4 text-sm bg-neutral-800 text-neutral-50 flex items-center hover:bg-neutral-900 transition-colors ease-out">
        {children}
      </button>
    );
  }
  
  function LoginBtn() {
    return (
      <div className=" text-neutral-500 text-sm flex items-center gap-x-2">
        <button className="hover:text-neutral-600 transition-colors">Log In</button>{" "}
        <span className="text-neutral-200">|</span>
        <button className="hover:text-neutral-600 transition-colors">Sign Up</button>
      </div>
    );
  }
  
  export { Button, LoginBtn };