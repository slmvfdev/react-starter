import {lightTheme, darkTheme} from "common-ui-theme";
import {useTheme} from "@/hooks/useTheme.ts";
import {Button, ConfigProvider, message, Select} from "antd";
import {Moon, Sun} from "lucide-react";

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const {mode, color, toggleMode, changeColor, themeOptions} = useTheme();
  return (
    <>
      <ConfigProvider theme={mode === "dark" ? darkTheme(color) : lightTheme(color)}>
        {contextHolder}
        <div className="min-h-dvh flex flex-col">
          <div className='flex justify-end items-center gap-4 p-5'>
            <Button
              onClick={toggleMode}
              variant="filled"
              icon={mode === "dark" ? <Sun size={16}/> : <Moon size={16}/>}
            >
            </Button>

            <Select
              value={color}
              style={{ width: 120 }}
              onChange={changeColor}
              options={themeOptions}
            />
          </div>
          <div className='flex-1 flex flex-col gap-10 items-center justify-center'>
            <div className='text-6xl -translate-y-20 tracking-tighter'>Welcome to React Starter!</div>
            <Button type="primary" className='-translate-y-20' onClick={() => {
              messageApi.info('Hello, World!');
            }}>Say, hello!</Button>
          </div>
        </div>
      </ConfigProvider>
    </>
  )
}

export default App
