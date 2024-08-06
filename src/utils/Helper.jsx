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

export const errorToast = (text) => {
    toast.error(text, {
        style: {
            background: "#333",
            color: "#fff",
            borderRadius: "4px"
        }
    })
}