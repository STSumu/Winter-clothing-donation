import { AuthContext } from '../Provider/AuthProvider';
import { Link} from 'react-router-dom';

const CampaignCard = ({campaign}) => {
    const {title,image,description,division}=campaign;
    return (
        <div className="card bg-base-100 shadow-sm shadow-[#d9542c] border border-[#d9542c]/30">
  <figure className="px-5 pt-5">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-start'>{description}</p>
    <label className='text-start'>Division:{division}</label>
    <div className="card-actions">
    <Link
              className="btn text-white shadow-none border-0 bg-[#d9542c]"
              to='/details'
            >
              Donate Now
            </Link>
    </div>
  </div>
</div>
    );
};

export default CampaignCard;