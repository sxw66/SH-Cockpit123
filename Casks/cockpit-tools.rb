cask "cockpit-tools" do
  version "1.0.6"
  sha256 "fedb745f228d6e9ef40d7d29e83b126c7b1c19bfe718faa68f4993401c01d3ce"

  url "https://github.com/sxw66/SH-Cockpit123/releases/download/v#{version}/CockpitV2.Tools_#{version}_universal.dmg",
      verified: "github.com/sxw66/SH-Cockpit123/"
  name "CockpitV2 Tools"
  desc "Account manager for AI IDEs (Antigravity and Codex)"
  homepage "https://github.com/sxw66/SH-Cockpit123"

  auto_updates true

  postflight do
    system_command "/usr/bin/xattr",
                   args: ["-cr", "#{appdir}/CockpitV2 Tools.app"],
                   sudo: true
  end

  app "CockpitV2 Tools.app"

  zap trash: [
    "~/Library/Application Support/com.sxw66.cockpit-tools",
    "~/Library/Caches/com.sxw66.cockpit-tools",
    "~/Library/Preferences/com.sxw66.cockpit-tools.plist",
    "~/Library/Saved Application State/com.sxw66.cockpit-tools.savedState",
  ]

  caveats <<~EOS
    The app is automatically quarantined by macOS. A postflight hook has been added to remove this quarantine.
    If you still encounter the "App is damaged" error, please run:
      sudo xattr -rd com.apple.quarantine "/Applications/CockpitV2 Tools.app"
  EOS
end
