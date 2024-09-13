import logo from "../../images/logo.png"
import {AutoComplete, Badge, Dropdown, Form, Space} from "antd";
import {FaHeart, FaRegHeart, FaRegUserCircle} from "react-icons/fa";
import {IoLogInOutline} from "react-icons/io5";
import {Link, useNavigate} from "react-router-dom";
import {SlUser} from "react-icons/sl";
import {useSelector} from "react-redux";
import {Recipe} from "../../types";
import {RootState} from "../../redux/store";
import {useEffect, useState} from "react";
import {BiSearch} from "react-icons/bi";
import {LuSettings2} from "react-icons/lu";
import useSearchParamsHook from "../../paramsHook/paramsHook.ts";
import {useSearchRecipeQuery} from "../../redux/api/productsApi.ts";


const Header = () => {
  const [search, setSearch] = useState("");
  const {getParam} = useSearchParamsHook()
  const {data: searchData} = useSearchRecipeQuery({q: search})
  const [userInfo, setUserInfo] = useState({
    firstName: ""
  })
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const {products}: { products: Recipe[] } = useSelector((state: RootState) => state.like);

  useEffect(() => {
    if (token) {
      const user = JSON.parse(atob(JSON.parse(token).token.split(".")[1]))
      setUserInfo(user)
    }
  }, [token]);

  const handleSearchSubmit = (value : string) => {
    navigate(`/search?q=${value.search}`);
  };
  const onSelect = (data) => {
    console.log("onSelect", data);
  };
  const loadData = async (searchText : string) => {
    try {
      setSearch(searchText);
    } catch (error) {
      console.log(error);
    }
  };

  const items = [
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
      ];

  return (
      <div className="w-full flex justify-between items-center px-10 bg-[#f7f8fa80] shadow-xl py-2">
        <div>
          <Link to='/'><img className="max-w-[150px]" src={logo as string} alt="Logo"/></Link>
        </div>
        <div>
          <Form initialValues={{search: getParam("q")}} onFinish={handleSearchSubmit}
                className="flex items-center gap-3 bg-[#fefefe] h-[45px] w-[500px] py-1 px-4 rounded-[62px] border border-gray-300 hover:border-[#1677FF]">
            <BiSearch className="text-[#0000005f] text-2xl"/>
            <Form.Item
                name="search"
                className="w-full !mb-0"
                rules={[{required: false}]}
            >
              <AutoComplete
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      navigate(`/search?q=${search}`);
                    }
                  }}
                  options={searchData?.payload?.map((item) => ({
                    label: (
                        <Link
                            className="block"
                            key={item._id}
                            to={`/car-details/${item._id}`}
                        >
                          {item.name}
                        </Link>
                    ),
                  }))}
                  className="search_input"
                  onSelect={onSelect}
                  onSearch={(text: string) =>
                      text ? loadData(text) : loadData({payload: []})
                  }
                  placeholder="Search..."
              />
            </Form.Item>
            <LuSettings2 className="text-[24px] text-gray-400"/>
          </Form>
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
