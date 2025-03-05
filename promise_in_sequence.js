const createAsyncTask = () => {

    const randomVal = Math.floor(Math.random() *10)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(randomVal > 5) {
                resolve(randomVal)
            }
            else {
                reject(randomVal)
            }
        },randomVal*100)
    })
}

const tasks = [
    createAsyncTask,
    createAsyncTask,
    createAsyncTask,
    createAsyncTask,
    createAsyncTask
]

const taskRunnerIterative = async(tasks, cb) => {
    const result = [];
    const error = [];

    for(let task of tasks) {
        try {
            const sucessTask = await task()
            result.push(sucessTask)
        } catch (e) {
            error.push(e)
        }
    }
    cb(result, error)
}

const taskRunnerRecursion = (tasks, cb) => {
    const result = [];
    const error = [];

    const helper = (ptr = 0) => {
        if(ptr === tasks.length) {
            cb(result, error);
            return;
        }
        tasks[ptr]().then((num) => {
            result.push(num);
        }).catch((num) => {
            error.push(num);
        }).finally(() => {
            helper(++ptr)
        })
    }
    helper()
}

taskRunnerIterative(tasks, (result, err) => console.log(result, err))
taskRunnerRecursion(tasks, (result, err) => console.log(result, err))