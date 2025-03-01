export default function useToast() {
    function cargarToast() {
        const toastLS = localStorage.getItem('toast');
        if (toastLS) {
            return JSON.parse(toastLS)
        }
        return []
    }
    function addToast(type, message) {
        if (!type || !message) {
            return
        }
        const data = cargarToast()
        data.push({ type, message })
        localStorage.setItem('toast', JSON.stringify(data))
    }
    function deleteToast() {
        const data = cargarToast()
        //console.log("Nuweva",data.slice(1))
        localStorage.setItem('toast', JSON.stringify(data.slice(1)))
    }
    return {
        cargarToast,
        addToast,
        deleteToast
    }
}