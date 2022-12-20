function Navbar() {
  return (
    <header class="flex justify-between items-center bg-zinc-900 p-4 px-24">
      {' '}
      <a class="text-white text-3xl font-bold" href="/">
        <span class="text-sky-500">my</span>inventory
      </a>
      <div class="flex text-white text-xl font-semibold">[object SVGSymbolElement]</div>
      <div class="text-xl font-semibold">
        <button class="flex items-center text-white justify-between" id="dropdown">
          {' '}
          <img class="w-10 h-10 rounded-full" />
          <span class="ml-2 text-white text-xl font-semibold"> </span>
          <span class="mdi mdi-chevron-down"></span>
        </button>
        <div class="flex flex-col absolute hidden bg-white shadow-lg rounded-lg px-4 py-2 w-48 justify-between items-center" id="dropdow-menu">
          <a class="text-gray-700 w-full flex.items-center px-2 py-2 hover:bg-gray-200 rounded-lg" href="/">
            <span class="mdi mdi-account-outline mr-2"></span>Profile
          </a>
          <a class="text-gray-700 w-full flex.items-center px-2 py-2 hover:bg-gray-200 rounded-lg" href="/logout">
            <span class="mdi mdi-logout mr-2"></span>Logout
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
