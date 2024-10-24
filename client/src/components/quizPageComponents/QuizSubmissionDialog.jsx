function QuizSubmissionDialog({ answers }) {
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-11/12 max-w-5xl p-8 shadow-lg rounded-lg bg-gradient-to-b from-blue-50 to-blue-100">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 hover:bg-red-100 hover:text-red-500">
                            ✕
                        </button>
                    </form>
                    <div className="header">
                        <h3 className="font-extrabold text-3xl  text-center mb-6 text-[var(--primary)]">
                            🎉 Quiz Completed!
                        </h3>
                        <h2 className=" text-xl  text-center mb-6">Your style: <span className="text-[var(--grey--900)]">Anxious</span></h2>

                    </div>

                    <p className="text-lg font-semibold  mb-4 ">
                        Here are your selected answers:
                    </p>
                    <ul className="space-y-6">
                        {answers.map((answer, index) => (
                            <li key={index} className="bg-white p-4 rounded-lg shadow-lg">
                                <strong className="block  text-lg mb-2">
                                    Question {index + 1}:
                                </strong>
                                <h4 className="mb-2 text-[var(--primary)]">{answer.question}</h4>
                                <p>
                                    <strong className="text-gray-600">Your Answer:</strong>
                                    <span className="ml-2 text-gray-800">{answer.selectedOption}</span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </dialog>
        </div>
    );
}

export default QuizSubmissionDialog;
