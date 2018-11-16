function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const sortedArrayToBST = (nums, start = 0, end = nums.length) => {
  if (start >= end) return null;
  const middle = start + Math.floor((end - start) / 2);
  const root = new TreeNode(nums[middle]);
  root.left = sortedArrayToBST(nums, start, middle);
  root.right = sortedArrayToBST(nums, middle + 1, end);

  return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
