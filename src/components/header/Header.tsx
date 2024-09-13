import logo from "../../images/logo.png"
import {Badge, Dropdown, Input, Space} from "antd";
import {FiSearch} from "react-icons/fi";
import {FaHeart, FaRegHeart, FaRegUserCircle} from "react-icons/fa";
import {IoLogInOutline, IoLogOutOutline} from "react-icons/io5";
import {logOut} from "../../redux/slice/authSlice.ts";
import {Link, useNavigate} from "react-router-dom";
import {SlUser} from "react-icons/sl";
import {useDispatch, useSelector} from "react-redux";
import {Recipe} from "../../types";
import {AppDispatch, RootState} from "../../redux/store";
import {useEffect, useState} from "react";


const Header = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: ""
  })
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const dispatch = useDispatch<AppDispatch>()
  const {products}: { products: Recipe[] } = useSelector((state: RootState) => state.like);

  useEffect(() => {
    if (token) {
      const user = JSON.parse(atob(JSON.parse(token).token.split(".")[1]))
      setUserInfo(user)
    } else {
      navigate("/")
    }
  }, [token]);

  const items =
      [
        {
          label: userInfo && userInfo ?
              <div onClick={() => navigate("/profile")}
                   className="bg-transparent flex items-center gap-2 text-[#596780]">
                <span>{userInfo?.firstName}</span> <SlUser/>
              </div> : <div className="bg-transparent flex items-center gap-2 text-[#596780]">User not registered</div>,
          key: "0"
        },
        {
          label: <div onClick={() => navigate("/auth")}
                      className="bg-transparent flex items-center gap-2 text-[#596780]">
            <span>Sign in</span>
            <IoLogInOutline/>
          </div>,
          key: '1',
        },
        {
          label: <div onClick={() => dispatch(logOut)} className="bg-transparent flex items-center gap-2 text-[#596780]">
            <span>Log Out</span>
            <IoLogOutOutline/>
          </div>,
          key: '2',
        }
      ];

  return (
      <div className="w-full flex justify-between items-center px-10 bg-[#f7f8fa80] shadow-xl py-2">
        <div>
          <Link to='/'><img className="max-w-[150px]" src={logo as string} alt="Logo"/></Link>
        </div>
        <div>
          <Input placeholder="default size" prefix={<FiSearch/>}/>
        </div>
        <div>
          <ul>
            <li className="text-lg">
              <Link className="flex justify-center items-center" to="/liked"><Badge
                  count={products.length}>{products.length > 0 ?
                  <FaHeart className="text-red-600 text-[24px]"/> :
                  <FaRegHeart className="text-red-600 text-[24px]"/>}</Badge></Link></li>
            {/*<li><Link to="/carts"><Badge count={cart.length}><AiFillProduct className="text-[32px]"/></Badge></Link>*/}
            {/*</li>*/}
          </ul>
        </div>
        <div>
          <Dropdown
              menu={{
                items,
              }}
              trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <div className="pb-2 flex justify-center items-center">
                  <FaRegUserCircle
                      className="w-[40px] h-[40px] text-[#596780] rounded-full"
                  />
                </div>
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
  )
}
export default Header
