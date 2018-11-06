const makeDummyHandler = (name) => {
    const msg = name ? 
        "Warning: Missing implementation of `" + name + "`." :
        "Warning: Handler is not provided."
    return ()=>console.warn(msg);
}

export { makeDummyHandler }