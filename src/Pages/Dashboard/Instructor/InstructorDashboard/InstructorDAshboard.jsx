
import InstructorDashBoardHeader from './InstructorDashBoardHeader';

const InstructorDAshboard = () => {
    
    return (
        <div>
          <InstructorDashBoardHeader></InstructorDashBoardHeader>
            <div className='grid grid-cols-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-16 gap-5 lg:px-20 
            mb-24'>
                <div className="card bg-base-100 shadow-2xl mx-auto">
                    <figure><img className=' w-full'
                        src="https://cdn-icons-png.flaticon.com/512/4762/4762311.png" alt="" /></figure>
                    <div className="card-body">
                        
                        
                            <button className='btn w-full bg-[#12C29F] text-white mt-4'>
                                Add New course</button>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div>


                <div>card-1</div>
                <div>card-1</div>
            </div>
        </div>
    );
};

export default InstructorDAshboard;