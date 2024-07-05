import ko from "knockout";

ko.components.register("Home", {
  template: "./view.html",
  viewModel: { require: "./viewModel.ts" },
});
