import WithStyled from "./WithStyled"

export const styleConstructor = (style) => {
    const check = (name) => (
		Boolean(style.find(item => item.name === name)) ? style.find(item => item.name === name).setByCustomer : null
    )
    const get = (name) => (
        style.find(item => item.name === name)?.value 
    )

    return {
        check,
        get
    }
}



export const dataConstructor = (mock) => {

    const get = (name) => {
        if(typeof name === "function") {
            return name(mock)
        }
        return Boolean(mock.filter(item => item.name === name)[0]) ? mock.filter(item => item.name === name)[0].value : null
    }

    const check = (name) => {
        return Boolean(mock.filter(item => item.name === name)[0]) ? mock.filter(item => item.name === name)[0].setByCustomer : null
    }
    return {
        get , 
        check
    }
}

const generateColor = (color , tone) => `${color}${tone}0`


export {
    WithStyled , 
    generateColor
}