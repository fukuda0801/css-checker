import { useRouter } from "next/router";
import styles from "./Sidebar.module.css";
import { List, ListItem, ListItemText, Drawer } from "@mui/material";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className={styles.container}>
      <Drawer variant="permanent" className={styles.drawer}>
        <List>
          <ListItem
            className={styles.listItem}
            onClick={() => handleNavigation("/")}
          >
            <ListItemText primary="Top" />
          </ListItem>
          <ListItem
            className={styles.listItem}
            onClick={() => handleNavigation("/design/borderRadius")}
          >
            <ListItemText primary="border-radius" />
          </ListItem>
          <ListItem
            className={styles.listItem}
            onClick={() => handleNavigation("/design/boxShadow")}
          >
            <ListItemText primary="box-shadow" />
          </ListItem>
          <ListItem
            className={styles.listItem}
            onClick={() => handleNavigation("/design/fontColor")}
          >
            <ListItemText primary="font" />
          </ListItem>
        </List>
      </Drawer>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
