const wait = async (ms: number): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, ms));
    return true;
};

export default wait;
