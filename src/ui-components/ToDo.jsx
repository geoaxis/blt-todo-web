/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function ToDo(props) {
  const { todo, overrides, ...rest } = props;
  return (
    <View
      width="1118px"
      height="91px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ToDo")}
    >
      <View
        width="918px"
        height="51px"
        position="absolute"
        top="22px"
        left="17px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 421")}
      >
        <View
          width="918px"
          height="51px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 419")}
        >
          <View
            width="918px"
            height="51px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 420")}
          >
            <View
              width="918px"
              height="51px"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(217,217,217,1)"
              {...getOverrideProps(overrides, "Rectangle 1164")}
            ></View>
          </View>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.65px"
          width="882px"
          position="absolute"
          top="calc(50% - 12px - -0.5px)"
          left="15px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={todo?.description}
          {...getOverrideProps(
            overrides,
            "This is the to do text in its entirety and looking at how it grows"
          )}
        ></Text>
      </View>
    </View>
  );
}
