import { useBoardStore } from "@/store/BoardStore";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const taskTypes = [
  {
    id: "ToDo",
    name: "To Do",
    description: "A new task to be completed",
    color: "bg-red-600",
  },
  {
    id: "WIP",
    name: "Work In Progress",
    description: "A task that is being worked on",
    color: "bg-yellow-600",
  },
  {
    id: "Done",
    name: "Done",
    description: "A task that has been completed",
    color: "bg-green-600",
  },
];

function TaskTypeGroup() {
  const [setNewTaskType, newTaskType] = useBoardStore((state) => [
    state.setNewTaskType,
    state.newTaskType,
  ]);

  return (
    <div className="w-full py-5">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup
          value={newTaskType}
          onChange={(e) => {
            setNewTaskType(e);
          }}
        >
          <div className="space-y-2">
            {taskTypes.map((taskType) => (
              <RadioGroup.Option
                key={taskType.id}
                value={taskType.id}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                      : ""
                  }
                        ${
                          checked
                            ? `${taskType.color} bg-opacity-75 text-white`
                            : "bg-white"
                        }
                         relative flex cursor-pointer rounded-lg px-5 py-4 shadow:md focus:outline-none
                    `
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {taskType.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-white" : "text-gray-500"
                            }`}
                          >
                            {taskType.description}
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckCircleIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

export default TaskTypeGroup;
