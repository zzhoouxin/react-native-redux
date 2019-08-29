import React from "react";
import { View } from "react-native";
import Buttons from "./Buttons";
import ShowView from "./showView";
import { Color } from "./color";

/**
 * 简易版redux实现步骤
 * 1.使用useContext创建一个容器-用于包裹其他组件
 * 2.创建reducer- reducer能得到 state和dispatch
 * 3.根据reducer生产的得到的  数据源和请求  放到共享的里面
 * 4.在其他组件创建useContext-消化他。 得到数据源和请求
 * 5.实现更新数据
 * @constructor
 */

function Home() {
  return (
    <View>
      <Color>
        <ShowView />
        <Buttons />
      </Color>
    </View>
  );
}

export default Home;
