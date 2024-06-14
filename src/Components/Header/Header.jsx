import SearchHeader from './SearchHeader';
import UserHeaderPlagin from './UserHeaderPlagin';
import logo from '../../images/logo.jpg';

const Header = () => {
    return (
        <div className="flex justify-between h-16 items-center px-12 pt-5">
            <div className='flex items-center'>
                <img src={logo} alt="logo" className='h-9' />
                <p className="inline ml-3 font-bold text-[19px]">
                    PlusDev<span className=' text-ef4444'>.NET</span>
                </p>
            </div>
            <SearchHeader />
            <UserHeaderPlagin />
        </div>
    )
}

export default Header