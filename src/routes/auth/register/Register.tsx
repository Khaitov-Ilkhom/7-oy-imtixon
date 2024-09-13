import {FC, useEffect} from "react";
import type { FormProps } from "antd";
import {Button, Form, Input, message, Typography} from "antd";
import {useSignUpMutation} from "../../../redux/api/authApi.ts";
import {Link, useNavigate} from "react-router-dom";

type FieldType = {
  firstName: string,
  lastName: string
}

const {Title, Text} = Typography

const Register: FC = () => {
  const [signInRequest, {isSuccess, isError}] = useSignUpMutation();
  const navigate = useNavigate()

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    signInRequest(values)
  };

  useEffect(() => {
    if(isSuccess){
      message.success("Registered successfully")
      navigate("/auth")
    }
    if (isError) {
      message.error("Registered Error")
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
           initialValues={{ remember: true }}
           onFinish={onFinish}
           onFinishFailed={onFinishFailed}
           autoComplete="off"
           layout={"vertical"}
           className="w-full"
       >
         <Title className="text-center">Register</Title>
         <Form.Item<FieldType>
             label="FirstName"
             name="firstName"
             rules={[{ required: true, message: "Please input your firstname!" }]}
         >
           <Input />
         </Form.Item>

         <Form.Item<FieldType>
             label="LastName"
             name="lastName"
             rules={[{ required: true, message: "Please input your lastname!" }]}
         >
           <Input />
         </Form.Item>

         <Form.Item>
           <Button className="w-full !bg-[#56b280] !text-white active:scale-95 active:bg-[#56b280]" htmlType="submit">
             Register
           </Button>
         </Form.Item>
       </Form>
       <div className="text-center">
         <Text >Already have an account? <Link className="!text-[#499CA6]" to="/auth">Sign In</Link></Text>
       </div>
     </div>
  );
};

export default Register;
