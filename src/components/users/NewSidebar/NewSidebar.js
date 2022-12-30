import React from "react";
import styled from "styled-components";

export const NewSidebar = ({}) => {
  return (
    <DropdownMenuesRootRoot>
      <Dashboard1>
        <Book src={`https://file.rendit.io/n/hTvJ4FKuac26Faw6KKdu.svg`} />
        <Text1>Dashboard</Text1>
        <Chevrondown
          src={`https://file.rendit.io/n/vCNrQSwCLke6vySq4L0P.svg`}
        />
      </Dashboard1>
      <SiteOptimization1>
        <Settings src={`https://file.rendit.io/n/l8IYa5jKl6elJGMzjbLV.svg`} />
        <Text2>Site optimization</Text2>
        <Chevrondown
          src={`https://file.rendit.io/n/lwZRbQ8NEgH6JSCmNlBA.svg`}
        />
      </SiteOptimization1>
      <Analytics1>
        <Barchart src={`https://file.rendit.io/n/nYxwbiI8FdgMtq15hd3K.svg`} />
        <Text3>Analytics</Text3>
        <Book src={`https://file.rendit.io/n/lwZRbQ8NEgH6JSCmNlBA.svg`} />
      </Analytics1>
      <MyWorks1>
        <Folder src={`https://file.rendit.io/n/u9ubh5bsi3o06gb3jVwe.svg`} />
        <Text4>My works</Text4>
        <Book src={`https://file.rendit.io/n/lwZRbQ8NEgH6JSCmNlBA.svg`} />
      </MyWorks1>
    </DropdownMenuesRootRoot>
  );
};

export default NewSidebar;

const Book = styled.img`
  width: 24px;
  height: 24px;
`;
const Chevrondown = styled.img`
  width: 24px;
  height: 24px;
  align-self: flex-end;
`;
const DropdownMenuesRootRoot = styled.div`
  width: 201px;
  height: 173px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const Dashboard1 = styled.div`
  width: 152px;
  height: 26px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
const Text1 = styled.div`
  margin: 2px 0px 0px 0px;
  color: #916bff;
  font-size: 17px;
  font-weight: 600;
  font-family: Inter;
  white-space: nowrap;
`;
const SiteOptimization1 = styled.div`
  width: 201px;
  height: 27px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  align-items: center;
`;
const Settings = styled.img`
  width: 24px;
  height: 24px;
  align-self: flex-start;
`;
const Text2 = styled.div`
  color: #ffffff;
  font-size: 17px;
  font-weight: 600;
  font-family: Inter;
  white-space: nowrap;
`;
const Analytics1 = styled.div`
  width: 136px;
  height: 28px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;
const Barchart = styled.img`
  width: 24px;
  height: 24px;
  align-self: flex-start;
  margin: 0px 4px 0px 0px;
`;
const Text3 = styled.div`
  margin: 0px 7px 2px 0px;
  color: #ffffff;
  font-size: 17px;
  font-weight: 600;
  font-family: Inter;
  white-space: nowrap;
`;
const MyWorks1 = styled.div`
  width: 147px;
  height: 29px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;
const Folder = styled.img`
  width: 24px;
  height: 24px;
  align-self: flex-start;
  margin: 0px 11px 0px 0px;
`;
const Text4 = styled.div`
  margin: 0px 8px 3px 0px;
  color: #ffffff;
  font-size: 17px;
  font-weight: 600;
  font-family: Inter;
  white-space: nowrap;
`;
