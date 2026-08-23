import {
  ArnHead,
  ArnTail,
  ResourceArnRow,
} from "@/components/resourceCard/components/resourceCard.styled";
import { splitArnForDisplay } from "@/helpers/arn.helpers";
import Tooltip from "@mui/material/Tooltip";
import type { ResourceCardArnProps } from "@/components/resourceCard/types/resourceCard.types";
import React from "react";


const ResourceCardArn: React.FC<ResourceCardArnProps> = ({ arn }) => {
  const { head, tail } = splitArnForDisplay(arn);

  return (
    <Tooltip title={arn} placement="bottom-start">
      <ResourceArnRow>
        <ArnHead>{head}</ArnHead>
        <ArnTail>{tail}</ArnTail>

      </ResourceArnRow>
    </Tooltip>
  );
};

export default ResourceCardArn;
