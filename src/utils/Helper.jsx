import toast from "react-hot-toast"

export const makeToast = (text) => {
    toast.success(text, {
        style: {
            background: "#333",
            color: "#fff",
            borderRadius: "4px"
        }
    })
}