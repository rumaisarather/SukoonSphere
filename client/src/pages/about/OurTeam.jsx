import { ProfessionalsDetails } from '@/utils/ProfessionalsDetails'
import { Link } from 'react-router-dom';

function OurTeam() {
    // Extract necessary fields and map to boardMembers structure
    const boardMembers = ProfessionalsDetails.map(professional => ({
        userId: professional.userId,
        imgUrl: professional.profile.image,
        name: `${professional.profile.name}, ${professional.profile.role}`,
        qualification: professional.profile.fullTitle,
        description: `${professional.profile.quote} Known for: ${professional.profile.highlights.join(', ')}.`,
    }));
    console.log({ boardMembers })

    return (
        <div className="max-w-5xl mx-auto mt-20  text-black font-sans">
            <div className="">
                <h1 className="text-4xl font-bold mb-4 text-[var(--black-color)]">Learn more about the experts who review our articles to make sure they are accurate and trustworthy.</h1>
                <p className="mb-4">
                    SukoonSphere Health Review Board has a team of board-qualified physicians and established mental health experts who ensure our content is high-quality and inclusive. The job of our experts who are compassionate resources that helps you prioritize your mental health and well-being.
                </p>
                <p className="mb-4">
                    Get to know the psychologists, psychotherapists, psychiatrists, social workers, counselors, mindfulness coaches, and other mental health professionals and educators who make up the Review Board.
                </p>
                <h2 className="text-lg font-semibold mb-2">Review Board Members</h2>
                {boardMembers.map((member, index) => (
                    <div key={index} className="mb-6 grid grid-cols-12 gap-6">
                        <div className='col-span-3' style={{}}>
                            <img src={member.imgUrl} alt={member.name} className="w-full h-full rounded-[4px] object-cover" />
                        </div>
                        <div className='col-span-8 space-y-2'>
                            <Link to={`/user-profile/${member.userId}`}>
                                <h3 className="text-2xl font-bold">{member.name}</h3>
                            </Link>
                            <p className="text-lg italic">{member.qualification}</p>
                            <p className="text-md mb-3">{member.description}
                                <span className='ml-4'>
                                    <Link
                                        to={`/user-profile/${member.userId}`}
                                        key={member.userId}
                                        className="text-blue-600 hover:text-blue-800 pt-6"
                                    >
                                        Read more
                                    </Link>
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurTeam;
