{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.05";
    systems.url = "github:nix-systems/default";
    devenv.url = "github:cachix/devenv";
  };

  outputs = { self, nixpkgs, devenv, systems, ... }@inputs:
    let forEachSystem = nixpkgs.lib.genAttrs (import systems);
    in {
      devShells = forEachSystem (system:
        let pkgs = nixpkgs.legacyPackages.${system};
        in {
          default = devenv.lib.mkShell {
            inherit inputs pkgs;
            modules = [{
              # https://devenv.sh/reference/options/
              packages = [ pkgs.hello pkgs.yarn ];
              languages.typescript.enable = true;
              languages.javascript.enable = true;
              languages.javascript.corepack.enable = true;
              languages.python.enable = true;
              languages.python.package = pkgs.python311;

              enterShell = ''
                hello
              '';
            }];
          };
        });
    };
}
