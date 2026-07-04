cask "cockpit-tools" do
  version "0.26.4"
  sha256 "365248c95c100575cacaeacd789a3ab84bf1059b016fd7ea2b34082f76d42106"

  url "https://github.com/sxw66/SH-Cockpit123/releases/download/v#{version}/Cockpit.Tools_#{version}_universal.dmg",
      verified: "github.com/sxw66/SH-Cockpit123/"
  name "Cockpit Tools"
  desc "Account manager for AI IDEs (Antigravity and Codex)"
  homepage "https://github.com/sxw66/SH-Cockpit123"

  auto_updates true

  postflight do
    system_command "/usr/bin/xattr",
                   args: ["-cr", "#{appdir}/Cockpit Tools.app"],
                   sudo: true
  end

  app "Cockpit Tools.app"

  zap trash: [
    "~/Library/Application Support/com.sxw66.cockpit-tools",
    "~/Library/Caches/com.sxw66.cockpit-tools",
    "~/Library/Preferences/com.sxw66.cockpit-tools.plist",
    "~/Library/Saved Application State/com.sxw66.cockpit-tools.savedState",
  ]

  caveats <<~EOS
    The app is automatically quarantined by macOS. A postflight hook has been added to remove this quarantine.
    If you still encounter the "App is damaged" error, please run:
      sudo xattr -rd com.apple.quarantine "/Applications/Cockpit Tools.app"
  EOS
end
