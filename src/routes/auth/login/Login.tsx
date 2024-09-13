import {FC, useEffect} from "react";
import type { FormProps } from "antd";
import {Button, Form, Input, message, Typography} from "antd";
import { useDispatch } from "react-redux";
import {useSignInMutation} from "../../../redux/api/authApi.ts";
import {signIn} from "../../../redux/slice/authSlice.ts";
import {Link, useNavigate} from "react-router-dom";
import {AppDispatch} from "../../../redux/store";

export type FieldType = {
  username: string,
  password: string
}

const {Title, Text} = Typography

const Login: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [signInRequest, {data, isSuccess, isError}] = useSignInMutation();
  const navigate = useNavigate()

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    signInRequest(values)
  };

  useEffect(() => {
    if(isSuccess){
      message.success("Successfully logged")
      dispatch(signIn({ token: data.token}))
      navigate("/")
    }
    if (isError) {
      message.error("Logged error")
    }
  }, [isSuccess, isError])


  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
      errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
     <div className="w-[400px] bg-white p-6 rounded-xl shadow-2xl">
       <Form
           name="basic"
           layout={"vertical"}
           initialValues={{ remember: true }}
           onFinish={onFinish}
           onFinishFailed={onFinishFailed}
           autoComplete="off"
           className="w-full"
       >
         <Title className="text-center">Log In</Title>
         <Form.Item<FieldType>
             label="Username"
             name="username"
             initialValue="emilys"
             rules={[{ required: true, message: "Please input your email!" }]}
         >
           <Input />
         </Form.Item>

         <Form.Item<FieldType>
             label="Password"
             name="password"
             initialValue="emilyspass"
             rules={[{ required: true, message: "Please input your password!" }]}
         >
           <Input.Password />
         </Form.Item>

         <Form.Item>
           <Button className="w-full !bg-[#56b280] !text-white active:scale-95 active:bg-[#56b280]" type="primary" htmlType="submit">
             Login
           </Button>
         </Form.Item>
       </Form>
       <div className="text-center">
         <Text >Dont you have account? <Link className="!text-[#499CA6]" to="/auth/signup">Sign Up</Link></Text>
       </div>
     </div>
  );
};

export default Login;
