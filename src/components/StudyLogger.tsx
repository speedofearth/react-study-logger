const StudyLogger = () => {
    console.log(new Date().toDateString());

    return (
        <form>
            <div className="new-log__control">
                <label>Subject</label>
                <input
                    type="text"
                    className="border-2 border-black"
                />
            </div>
            <div className="new-log__control">
                <label>Hours</label>
                <input type="number"
                    className="border-2 border-black"
                />
            </div>
            <div className="new-log__control">
                <label>Date</label>
                <input type="hidden"
                    value={new Date().toLocaleDateString()}
                />
            </div>
            <button>Log it!</button>
        </form>
    )
}

export default StudyLogger;