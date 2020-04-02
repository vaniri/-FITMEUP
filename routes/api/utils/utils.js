async function handleUpDelRes(resPromise, res) {
    let result = await resPromise;
    res.status(result ? 204 : 404).json({});
}

function checkDupErr(err, res) {
    res.status(err.code === 11000 ? 409 : 500).send(err);
}

module.export = { handleUpDelRes, checkDupErr };