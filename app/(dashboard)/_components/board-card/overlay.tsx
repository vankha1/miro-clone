export const Overlay = () => {
    return (
        <div
            className="opacity-0 group-hover:opacity-50 bg-black h-full w-full transition-opacity"
        /> // when hovering over the board card, the black background will appear and overlap => The reason is group-hover:opacity-50 (group is a class that is added to the parent div of the board card, and opacity-50 is the opacity of the black background)
    )
}