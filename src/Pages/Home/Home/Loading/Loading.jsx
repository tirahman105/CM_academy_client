
import { Dna } from 'react-loader-spinner';
import "./Loading.css"
const Loading = () => {
    return (
        <div className='pos-center'>
            <Dna
                visible={true}
                height="100"
                width="100"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    );
};

export default Loading;