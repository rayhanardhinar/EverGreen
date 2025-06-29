import * as React from "react";

import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SelectDemo(props: React.ComponentProps<typeof SelectValue>) {
  return (
    <Select>
      <SelectTrigger className="w-full py-6 bg-gray-200">
        <SelectValue {...props} />
      </SelectTrigger>
    </Select>
  );
}
