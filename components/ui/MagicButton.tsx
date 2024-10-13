import React from 'react'

const MagicButton = ({
    title,
    icon,
    position,
    otherClasses,
}: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
    return (
        <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-900 rounded-lg" />
            <div className={`inline-flex h-full w-full cursor-pointer items-center justify-center
             bg-slate-950 px-7 rounded-lg  relative group transition duration-200 text-white hover:bg-transparent gap-2 ${otherClasses}`}>
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </div>
        </button>


    )
}

export default MagicButton